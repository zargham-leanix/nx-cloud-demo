import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo44Component } from './lib23-demo44.component';

describe('Lib23Demo44Component', () => {
  let component: Lib23Demo44Component;
  let fixture: ComponentFixture<Lib23Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
