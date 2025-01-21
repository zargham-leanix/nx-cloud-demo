import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo4Component } from './lib12-demo4.component';

describe('Lib12Demo4Component', () => {
  let component: Lib12Demo4Component;
  let fixture: ComponentFixture<Lib12Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
