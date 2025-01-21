import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo46Component } from './lib55-demo46.component';

describe('Lib55Demo46Component', () => {
  let component: Lib55Demo46Component;
  let fixture: ComponentFixture<Lib55Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
