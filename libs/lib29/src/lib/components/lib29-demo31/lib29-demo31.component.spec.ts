import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo31Component } from './lib29-demo31.component';

describe('Lib29Demo31Component', () => {
  let component: Lib29Demo31Component;
  let fixture: ComponentFixture<Lib29Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
