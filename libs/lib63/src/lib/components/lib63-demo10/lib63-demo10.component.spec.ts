import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo10Component } from './lib63-demo10.component';

describe('Lib63Demo10Component', () => {
  let component: Lib63Demo10Component;
  let fixture: ComponentFixture<Lib63Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
