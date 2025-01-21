import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo19Component } from './lib19-demo19.component';

describe('Lib19Demo19Component', () => {
  let component: Lib19Demo19Component;
  let fixture: ComponentFixture<Lib19Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
