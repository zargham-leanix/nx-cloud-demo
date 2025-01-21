import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo4Component } from './lib79-demo4.component';

describe('Lib79Demo4Component', () => {
  let component: Lib79Demo4Component;
  let fixture: ComponentFixture<Lib79Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
