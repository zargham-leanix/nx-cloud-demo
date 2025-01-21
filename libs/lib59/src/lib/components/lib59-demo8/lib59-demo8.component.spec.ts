import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo8Component } from './lib59-demo8.component';

describe('Lib59Demo8Component', () => {
  let component: Lib59Demo8Component;
  let fixture: ComponentFixture<Lib59Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
