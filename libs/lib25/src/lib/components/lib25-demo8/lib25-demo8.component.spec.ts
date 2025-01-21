import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo8Component } from './lib25-demo8.component';

describe('Lib25Demo8Component', () => {
  let component: Lib25Demo8Component;
  let fixture: ComponentFixture<Lib25Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
