import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo4Component } from './lib57-demo4.component';

describe('Lib57Demo4Component', () => {
  let component: Lib57Demo4Component;
  let fixture: ComponentFixture<Lib57Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
