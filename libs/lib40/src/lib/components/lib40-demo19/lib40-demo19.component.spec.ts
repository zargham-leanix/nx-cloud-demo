import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo19Component } from './lib40-demo19.component';

describe('Lib40Demo19Component', () => {
  let component: Lib40Demo19Component;
  let fixture: ComponentFixture<Lib40Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
