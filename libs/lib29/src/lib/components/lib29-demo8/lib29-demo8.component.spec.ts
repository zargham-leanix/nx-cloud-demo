import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo8Component } from './lib29-demo8.component';

describe('Lib29Demo8Component', () => {
  let component: Lib29Demo8Component;
  let fixture: ComponentFixture<Lib29Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
