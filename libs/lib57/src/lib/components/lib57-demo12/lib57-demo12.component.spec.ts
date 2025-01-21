import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo12Component } from './lib57-demo12.component';

describe('Lib57Demo12Component', () => {
  let component: Lib57Demo12Component;
  let fixture: ComponentFixture<Lib57Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
