import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo19Component } from './lib38-demo19.component';

describe('Lib38Demo19Component', () => {
  let component: Lib38Demo19Component;
  let fixture: ComponentFixture<Lib38Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
