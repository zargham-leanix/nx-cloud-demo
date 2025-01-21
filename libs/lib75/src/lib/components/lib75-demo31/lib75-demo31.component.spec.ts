import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo31Component } from './lib75-demo31.component';

describe('Lib75Demo31Component', () => {
  let component: Lib75Demo31Component;
  let fixture: ComponentFixture<Lib75Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
