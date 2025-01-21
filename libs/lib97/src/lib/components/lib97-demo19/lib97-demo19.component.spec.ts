import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo19Component } from './lib97-demo19.component';

describe('Lib97Demo19Component', () => {
  let component: Lib97Demo19Component;
  let fixture: ComponentFixture<Lib97Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
