import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo4Component } from './lib5-demo4.component';

describe('Lib5Demo4Component', () => {
  let component: Lib5Demo4Component;
  let fixture: ComponentFixture<Lib5Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
