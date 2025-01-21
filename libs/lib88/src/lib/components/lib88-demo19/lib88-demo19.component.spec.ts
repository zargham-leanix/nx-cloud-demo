import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo19Component } from './lib88-demo19.component';

describe('Lib88Demo19Component', () => {
  let component: Lib88Demo19Component;
  let fixture: ComponentFixture<Lib88Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
