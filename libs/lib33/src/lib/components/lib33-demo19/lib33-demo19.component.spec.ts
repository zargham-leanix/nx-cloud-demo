import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo19Component } from './lib33-demo19.component';

describe('Lib33Demo19Component', () => {
  let component: Lib33Demo19Component;
  let fixture: ComponentFixture<Lib33Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
