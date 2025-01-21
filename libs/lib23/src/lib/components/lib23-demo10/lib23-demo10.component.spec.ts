import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo10Component } from './lib23-demo10.component';

describe('Lib23Demo10Component', () => {
  let component: Lib23Demo10Component;
  let fixture: ComponentFixture<Lib23Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
