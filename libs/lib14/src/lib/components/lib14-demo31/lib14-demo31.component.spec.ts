import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo31Component } from './lib14-demo31.component';

describe('Lib14Demo31Component', () => {
  let component: Lib14Demo31Component;
  let fixture: ComponentFixture<Lib14Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
