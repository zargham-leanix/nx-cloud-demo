import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo31Component } from './lib55-demo31.component';

describe('Lib55Demo31Component', () => {
  let component: Lib55Demo31Component;
  let fixture: ComponentFixture<Lib55Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
