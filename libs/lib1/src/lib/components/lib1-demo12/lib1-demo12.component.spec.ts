import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo12Component } from './lib1-demo12.component';

describe('Lib1Demo12Component', () => {
  let component: Lib1Demo12Component;
  let fixture: ComponentFixture<Lib1Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
