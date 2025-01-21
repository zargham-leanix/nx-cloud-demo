import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo10Component } from './lib57-demo10.component';

describe('Lib57Demo10Component', () => {
  let component: Lib57Demo10Component;
  let fixture: ComponentFixture<Lib57Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
