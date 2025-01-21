import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo46Component } from './lib14-demo46.component';

describe('Lib14Demo46Component', () => {
  let component: Lib14Demo46Component;
  let fixture: ComponentFixture<Lib14Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
