import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo31Component } from './lib57-demo31.component';

describe('Lib57Demo31Component', () => {
  let component: Lib57Demo31Component;
  let fixture: ComponentFixture<Lib57Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
