import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo10Component } from './lib29-demo10.component';

describe('Lib29Demo10Component', () => {
  let component: Lib29Demo10Component;
  let fixture: ComponentFixture<Lib29Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
