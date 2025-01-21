import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo8Component } from './lib55-demo8.component';

describe('Lib55Demo8Component', () => {
  let component: Lib55Demo8Component;
  let fixture: ComponentFixture<Lib55Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
