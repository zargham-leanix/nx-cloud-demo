import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo2Component } from './lib79-demo2.component';

describe('Lib79Demo2Component', () => {
  let component: Lib79Demo2Component;
  let fixture: ComponentFixture<Lib79Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
