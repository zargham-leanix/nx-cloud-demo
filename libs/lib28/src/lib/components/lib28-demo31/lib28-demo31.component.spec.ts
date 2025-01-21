import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo31Component } from './lib28-demo31.component';

describe('Lib28Demo31Component', () => {
  let component: Lib28Demo31Component;
  let fixture: ComponentFixture<Lib28Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
