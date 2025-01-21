import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo10Component } from './lib91-demo10.component';

describe('Lib91Demo10Component', () => {
  let component: Lib91Demo10Component;
  let fixture: ComponentFixture<Lib91Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
