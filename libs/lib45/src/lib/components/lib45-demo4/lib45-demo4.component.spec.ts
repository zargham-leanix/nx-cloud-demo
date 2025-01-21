import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo4Component } from './lib45-demo4.component';

describe('Lib45Demo4Component', () => {
  let component: Lib45Demo4Component;
  let fixture: ComponentFixture<Lib45Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
