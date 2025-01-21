import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo10Component } from './lib40-demo10.component';

describe('Lib40Demo10Component', () => {
  let component: Lib40Demo10Component;
  let fixture: ComponentFixture<Lib40Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
