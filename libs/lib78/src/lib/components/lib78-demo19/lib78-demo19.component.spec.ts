import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo19Component } from './lib78-demo19.component';

describe('Lib78Demo19Component', () => {
  let component: Lib78Demo19Component;
  let fixture: ComponentFixture<Lib78Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
