import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo25Component } from './lib78-demo25.component';

describe('Lib78Demo25Component', () => {
  let component: Lib78Demo25Component;
  let fixture: ComponentFixture<Lib78Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
