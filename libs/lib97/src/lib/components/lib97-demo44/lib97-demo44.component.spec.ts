import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo44Component } from './lib97-demo44.component';

describe('Lib97Demo44Component', () => {
  let component: Lib97Demo44Component;
  let fixture: ComponentFixture<Lib97Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
