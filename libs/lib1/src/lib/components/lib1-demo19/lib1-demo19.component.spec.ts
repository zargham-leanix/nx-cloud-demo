import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo19Component } from './lib1-demo19.component';

describe('Lib1Demo19Component', () => {
  let component: Lib1Demo19Component;
  let fixture: ComponentFixture<Lib1Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
