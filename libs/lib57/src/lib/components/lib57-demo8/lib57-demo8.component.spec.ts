import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo8Component } from './lib57-demo8.component';

describe('Lib57Demo8Component', () => {
  let component: Lib57Demo8Component;
  let fixture: ComponentFixture<Lib57Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
