import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo10Component } from './lib55-demo10.component';

describe('Lib55Demo10Component', () => {
  let component: Lib55Demo10Component;
  let fixture: ComponentFixture<Lib55Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
