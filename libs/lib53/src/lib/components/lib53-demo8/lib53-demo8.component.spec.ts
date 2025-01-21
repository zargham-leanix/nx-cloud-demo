import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo8Component } from './lib53-demo8.component';

describe('Lib53Demo8Component', () => {
  let component: Lib53Demo8Component;
  let fixture: ComponentFixture<Lib53Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
