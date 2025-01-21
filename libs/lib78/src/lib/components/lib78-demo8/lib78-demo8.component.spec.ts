import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo8Component } from './lib78-demo8.component';

describe('Lib78Demo8Component', () => {
  let component: Lib78Demo8Component;
  let fixture: ComponentFixture<Lib78Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
