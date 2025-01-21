import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo19Component } from './lib11-demo19.component';

describe('Lib11Demo19Component', () => {
  let component: Lib11Demo19Component;
  let fixture: ComponentFixture<Lib11Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
