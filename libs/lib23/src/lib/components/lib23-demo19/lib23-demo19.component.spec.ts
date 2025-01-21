import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo19Component } from './lib23-demo19.component';

describe('Lib23Demo19Component', () => {
  let component: Lib23Demo19Component;
  let fixture: ComponentFixture<Lib23Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
