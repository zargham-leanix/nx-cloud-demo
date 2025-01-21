import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo10Component } from './lib27-demo10.component';

describe('Lib27Demo10Component', () => {
  let component: Lib27Demo10Component;
  let fixture: ComponentFixture<Lib27Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
