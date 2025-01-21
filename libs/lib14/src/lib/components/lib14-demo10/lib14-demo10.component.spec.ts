import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo10Component } from './lib14-demo10.component';

describe('Lib14Demo10Component', () => {
  let component: Lib14Demo10Component;
  let fixture: ComponentFixture<Lib14Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
