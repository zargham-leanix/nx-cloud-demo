import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo31Component } from './lib52-demo31.component';

describe('Lib52Demo31Component', () => {
  let component: Lib52Demo31Component;
  let fixture: ComponentFixture<Lib52Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
