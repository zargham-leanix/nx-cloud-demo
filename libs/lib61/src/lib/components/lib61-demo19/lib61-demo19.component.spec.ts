import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo19Component } from './lib61-demo19.component';

describe('Lib61Demo19Component', () => {
  let component: Lib61Demo19Component;
  let fixture: ComponentFixture<Lib61Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
