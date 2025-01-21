import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo19Component } from './lib56-demo19.component';

describe('Lib56Demo19Component', () => {
  let component: Lib56Demo19Component;
  let fixture: ComponentFixture<Lib56Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
