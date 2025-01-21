import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo19Component } from './lib14-demo19.component';

describe('Lib14Demo19Component', () => {
  let component: Lib14Demo19Component;
  let fixture: ComponentFixture<Lib14Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
