import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo31Component } from './lib84-demo31.component';

describe('Lib84Demo31Component', () => {
  let component: Lib84Demo31Component;
  let fixture: ComponentFixture<Lib84Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
