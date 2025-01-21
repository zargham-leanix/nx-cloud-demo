import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo4Component } from './lib71-demo4.component';

describe('Lib71Demo4Component', () => {
  let component: Lib71Demo4Component;
  let fixture: ComponentFixture<Lib71Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
