import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo19Component } from './lib95-demo19.component';

describe('Lib95Demo19Component', () => {
  let component: Lib95Demo19Component;
  let fixture: ComponentFixture<Lib95Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
