import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo23Component } from './lib57-demo23.component';

describe('Lib57Demo23Component', () => {
  let component: Lib57Demo23Component;
  let fixture: ComponentFixture<Lib57Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
