import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo10Component } from './lib72-demo10.component';

describe('Lib72Demo10Component', () => {
  let component: Lib72Demo10Component;
  let fixture: ComponentFixture<Lib72Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
